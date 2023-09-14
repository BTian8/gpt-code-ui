import AssistantIcon from "@mui/icons-material/Assistant";

import "./Sidebar.css";

export default function Sidebar(props: {
  models: Array<{ name: string; displayName: string }>;
  selectedModel: string;
  onSelectModel: any;
  setOpenAIKey: any;
  openAIKey: string;
}) {
  const handleOpenAIButtonClick = () => {
    const key = prompt("Please enter your OpenAI key", props.openAIKey);
    if (key != null) {
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
