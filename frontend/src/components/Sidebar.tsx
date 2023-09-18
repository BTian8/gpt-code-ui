import AssistantIcon from "@mui/icons-material/Assistant";
// import Config from "../config";
import "./Sidebar.css";

export default function Sidebar(props: {
  models: Array<{ name: string; displayName: string }>;
  selectedModel: string;
  onSelectModel: any;
  setOpenAIKey: any;
  openAIKey: string;
}) {
  // const handleOpenAIButtonClick = async () => {
  //   const key = prompt("Please enter your OpenAI key", props.openAIKey);
  //   console.log(Config.WEB_ADDRESS);
  //   if (key != null) {
  //     console.log(key);
  //     sessionStorage.setItem("windowId", key);
  //     try {
  //       const response = await fetch(Config.WEB_ADDRESS + "/SetUserId", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ openAIKey: key }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }
  // };
  const handleOpenAIButtonClick = () => {
    const key = prompt("Please enter your OpenAI key", props.openAIKey);
    if (key != null) {
      sessionStorage.setItem("windowId", key);
      props.setOpenAIKey(key);
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <AssistantIcon /> TikTok Ecom
          <div className="github">
            <a href="https://bytedance.us.feishu.cn/docx/NnhTdjneJoZSdSx8fV8uldNXsvg">
              Documentation
            </a>
          </div>
        </div>
        <div className="settings">
          <label className="header">Settings</label>
          <label>Model</label>
          <select
            value={props.selectedModel}
            onChange={(event) => props.onSelectModel(event.target.value)}
          >
            {props.models.map((model, index) => {
              return (
                <option key={index} value={model.name}>
                  {model.displayName}
                </option>
              );
            })}
          </select>
          <label>Credentials</label>
          <button onClick={handleOpenAIButtonClick}>Set OpenAI key</button>
        </div>
      </div>
    </>
  );
}
