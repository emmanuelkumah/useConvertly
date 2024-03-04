type TFileProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileUploader: React.FC<TFileProps> = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="file">Choose a file </label>
      <input
        type="file"
        name=""
        id="file"
        accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={onChange}
      />
    </div>
  );
};

export default FileUploader;
