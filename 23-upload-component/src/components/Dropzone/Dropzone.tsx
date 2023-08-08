import useFileChange from '../../hooks/handleFileChange';

export function Dropzone() {
  const handleFileChange = useFileChange();
  return (
    <section>
      <form className="bg-purple-200">
        <input
          className="cursor-pointer"
          type="file"
          accept=".pdf, .rm, .md, .doc, .docx"
          multiple
          onChange={handleFileChange}
          draggable="true"
        />
      </form>
    </section>
  );
}
