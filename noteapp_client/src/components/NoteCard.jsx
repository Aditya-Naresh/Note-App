import React from "react";

const NoteCard = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg rounded-xl p-4 transition-all">
      <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>

      <p className="text-gray-700 text-sm">
        {content.length > 100 ? `${content.substring(0, 100)}...` : content}
      </p>
    </div>
  );
};

export default NoteCard;

