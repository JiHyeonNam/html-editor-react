import React from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MUIRichTextEditor from "mui-rte";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Box from "@material-ui/core/Box";
import TableChartIcon from "@material-ui/icons/TableChart";
import Quill from "./Quill";
import Jodit from "./Jodit";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DraftWysiwyg from "./DraftWysiwyg";

const MyBlock = (props) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#ebebeb",
      }}
    >
      My Block content is:
      {props.children}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));
// const defaultTheme = createMuiTheme();

// Object.assign(defaultTheme, {
//   overrides: {
//     MUIRichTextEditor: {
//       root: {
//         marginTop: 2,
//         width: "80%",
//         marginBottom: 20,
//         backgroundColor: "white",
//         paddingBottom: 24,
//       },
//       editor: {
//         borderBottom: "1px solid white",
//       },
//     },
//   },
// });

export default function Demo() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        text필드
        <TextField id="standard-basic" label="Question Title" />
      </div>
      <div>
        MuiRichText
        {/* <MuiThemeProvider theme={defaultTheme}>
          <MUIRichTextEditor label="Question Description" />
        </MuiThemeProvider> */}
      </div>
      <TextField id="outlined-basic" label="Answer1" variant="outlined" />
      <TextField id="filled-basic" label="Answer2" variant="filled"></TextField>
      {/* <Text>Question Description </Text> */}
      <div>
        Quill
        <Quill placeholder="some fun text" />
      </div>
      {/* <Jodit /> */}
      <div>
        SunEditor
        <SunEditor />
      </div>
      {/* <Editor
          // editorState={}
         toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
          // onEditorStateChange={this.onEditorStateChange}
/>; */}
      <div>
        wysiwyg
        <DraftWysiwyg />
      </div>
    </form>
  );
}
