import { createContext, useState } from 'react';
import ChildrenProp from '../types/Children';
import FileProp from '../types/Files';
import FilesContextProp from '../types/IFilesContext';

export const FilesListContext = createContext<FilesContextProp>({
  filesInfo: [],
  setFilesInfo: () => {},
});

export const FilesListProvider = ({ children }: ChildrenProp) => {
  const [filesInfo, setFilesInfo] = useState<FileProp[] | []>([]);

  return (
    <FilesListContext.Provider value={{ filesInfo, setFilesInfo }}>
      {children}
    </FilesListContext.Provider>
  );
};
