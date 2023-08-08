import { useContext } from 'react';
import { FilesListContext } from '../../contexts/FilesListContext';
import FileProp from '../../types/Files';

export const useFileChange = () => {
  const { setFilesInfo } = useContext(FilesListContext);

  const handleFileChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length > 0) {
      const newFile: FileProp[] = Array.from(target.files).map((file) => ({
        id: file.name.toLowerCase(),
        name: file.name.toLowerCase(),
        fileLength: file.size.toString(),
      }));

      setFilesInfo((prevFiles) => [...prevFiles, ...newFile]);
    }
  };

  return handleFileChange;
};
