import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContainer } from "../../../routes/Board/Announcement/style";
import { useBoardCreate } from "../../../hooks/board/useBoardCreate";
import { useRecoilValue } from "recoil";
import { boardCategoryState } from "../../../states/board";
import FONT from "../../../constants/fonts";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardCreateButton,
  BoardFileInput,
  BoardTitleInput,
} from "./style";

const BoardCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const category_id = useRecoilValue(boardCategoryState);
  const navigate = useNavigate();

  const formData = new FormData();

  const data = {
    title: title,
    content: content,
    category_id: category_id,
  };

  formData.append(
    "boardCreateRequest",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  const createMutation = useBoardCreate(formData);

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    navigate(-1);
  };

  return (
    <BoardContainer>
      <form onSubmit={handleCreateSubmit}>
        <BoardTitleInput
          style={FONT.SUBTITLE2}
          type="text"
          placeholder="제목"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
        />
        <BoardContentTextArea
          style={FONT.SUBTITLE1}
          placeholder="내용을 작성해주세요"
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setContent(e.currentTarget.value)
          }
        />
        <BoardFileInput
          style={FONT.SUBTITLE2}
          type="file"
          placeholder="파일"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            if (e.currentTarget.files) {
              setFile(e.currentTarget.files[0]);
            }
          }}
        />
        <BoardButtonContainer>
          <BoardCreateButton
            onSubmit={handleCreateSubmit}
            style={FONT.SUBTITLE1}
          >
            <PencilWhiteIcon />
            작성
          </BoardCreateButton>
        </BoardButtonContainer>
      </form>
    </BoardContainer>
  );
};

export default BoardCreate;
