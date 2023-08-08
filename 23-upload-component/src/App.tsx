import Dropzone from './components/Dropzone';
import Files from './components/Files';
import { FilesListProvider } from './contexts/FilesListContext';

export default function App() {
  return (
    <>
      <FilesListProvider>
        <Dropzone />
        <Files />
      </FilesListProvider>
    </>
  );
}
