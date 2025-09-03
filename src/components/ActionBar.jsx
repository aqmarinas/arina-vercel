import { Minus, NotepadText, Square, X } from "lucide-react";

export default function ActionBar({ onMinimize, onMaximize, onClose }) {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center gap-4 px-2 border-b border-black bg-white">
      <div className="flex justify-between items-center gap-2">
        <NotepadText className="w-4" />
        <p> README.md - Notepad</p>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={onMinimize}
          className="hover:bg-gray-200 rounded p-1"
          aria-label="Minimize"
          title="Minimize"
        >
          <Minus className="w-4" />
        </button>
        <button
          onClick={onMaximize}
          className="hover:bg-gray-200 rounded p-1"
          aria-label="Maximize"
          title="Maximize"
        >
          <Square className="w-4" />
        </button>
        <button
          onClick={onClose}
          className="hover:bg-gray-200 rounded p-1"
          aria-label="Close"
          title="Close"
        >
          <X className="w-4" />
        </button>
      </div>
    </div>
  );
}
