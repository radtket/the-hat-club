import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { RootRef, Paper } from "@material-ui/core";

const DragAndDrop = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log({ acceptedFiles });
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();
  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </Paper>
    </RootRef>
  );
};

export default DragAndDrop;
