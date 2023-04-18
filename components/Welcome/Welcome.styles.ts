import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  videoContainer: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    margin: 0,
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    zIndex: -1,
  }
}));
