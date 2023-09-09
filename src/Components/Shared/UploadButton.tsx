import React from "react";
import { AiOutlineCloudUpload } from 'react-icons/ai';

export type UploadButtonProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept: string;
};
export const UploadButton = (props: UploadButtonProps) => {
  return (
    <label htmlFor="fileInput" className={props.className}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}
      />
      <span className="flex justify-center items-center gap-2">
        Upload
        <AiOutlineCloudUpload className="w-6 h-6" />
      </span>

    </label>
  );
};
