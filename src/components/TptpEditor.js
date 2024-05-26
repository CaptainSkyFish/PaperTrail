"use client";
import "./styles/styles.css";

import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useState } from "react";
import * as Y from "yjs";
import Menubar from "./Menubar";
import TitleBox from "./TitleBox";

const TiptapEditor = function () {
  const [currentUser, setCurrentUser] = useState("Anonymous User");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
  });

  // Save current user to localStorage and emit to editor

  const setName = useCallback(() => {
    const name = (window.prompt("Name") || "").trim().substring(0, 32);

    if (name) {
      return setCurrentUser({ name });
    }
  }, [currentUser]);

  return (
    <div className="editor">
      <div className="m-2 relative border-solid border-2 border-gray-700">
        <TitleBox />
      </div>
      <div className="relative self-center">
        {editor && <Menubar editor={editor} />}
      </div>
      <EditorContent className="editor__content" editor={editor} />
      <div className="editor__footer flex border w-[210mm] rounded-full justify-between border-black self-center mt-2 mb-8">
        <div className="font-bold pl-4 pr-4">.....users online</div>
        <div className="editor__name font-bold pl-4 pr-4 ">
          <button onClick={setName}>{currentUser}</button>
        </div>
      </div>
    </div>
  );
};

export default TiptapEditor;
