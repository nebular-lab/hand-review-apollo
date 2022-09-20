import React, { useEffect, useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

const DraftJSEditor = () => {
  const [editorEnable, setEditorEnable] = useState(false)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  useEffect(() => {
    setEditorEnable(true)
  }, [])

  return (
    <div className="bg-white h-80">
      {editorEnable && (
        <Editor
          placeholder="ハンドレビューを書く"
          editorKey="test-key"
          editorState={editorState}
          onChange={setEditorState}
          
        />
      )}
    </div>
  )
}

export default DraftJSEditor
