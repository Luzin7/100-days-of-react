import { useContext } from 'react';
import { FilesListContext } from '../../contexts/FilesListContext';

export function Files() {
  const { filesInfo } = useContext(FilesListContext);

  const fileSize = (number: string) => {
    const numberSize = parseInt(number, 10);
    if (numberSize < 1024) {
      return `${numberSize} bytes`;
    } else if (numberSize >= 1024 && numberSize < 1048576) {
      return `${(numberSize / 1024).toFixed(1)} KB`;
    } else if (numberSize >= 1048576) {
      return `${(numberSize / 1048576).toFixed(1)} MB`;
    }
  };
  return (
    <section>
      <ul>
        {filesInfo &&
          filesInfo.map((fileInfo) => (
            <li key={fileInfo.name}>
              <i>Icon</i>
              <div>
                <span>{fileInfo.name}</span>
                <span>{fileSize(fileInfo.fileLength)}</span>
              </div>
              <div>
                <progress value="70" max="100" />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
