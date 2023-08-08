import FileProp from './Files';

interface FilesContextProp {
  filesInfo: FileProp[] | [];
  setFilesInfo: React.Dispatch<React.SetStateAction<FileProp[] | []>>;
}

export default FilesContextProp;
