import './App.css';
import gptLogo from './assets/icons8-chatgpt.svg';
import addBtn from './assets/icons8-add-64.png';
import msgIcon from './assets/icons8-new-message-64.png';
import homeIcon from './assets/icons8-home-page-64.png';
import saveIcon from './assets/icons8-save-close-64.png';
import upgradeChoi from './assets/icons8-slack-new-64.png';
import sendIcon from './assets/icons8-sent-64.png';
import userIcon from './assets/markbelloprofile.png';
import gptImg2 from './assets/icons8-chatgpt-48.png';
import chatGPTlogoofficial from './assets/assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="gptLogo" className="logo" />
            <span className="brand"><h1>ChatGPT</h1></span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="add-button-icon" className="addBtn" />New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />How to POMODORO to be Fullstack Web Developer?</button>
            <button className="query"><img src={msgIcon} alt="Query" />Whos is MARK BELLO from philippines?</button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems"><img src={homeIcon} alt="homeIcon" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saveIcon} alt="saveIcon" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={upgradeChoi} alt="upgradeChoiIcon" className="listItemsImg" />Upgrade to PRO!</div>

        </div>


      </div>

      <div className="main">
        <div className="chats">

          <div className="chat">
            <img src={userIcon} className="chatImg" alt="gpt-2nd-logo" />
            <p className="txt">Whos is MARK BELLO from philippines?</p>
          </div>

          <div className="chat bot">
            <img src={gptLogo} className="chatImg" alt="gpt-2nd-logo" />
            <p className="txt">Mark Bello from the Philippines is not a widely recognized figure in the public domain or media. It is possible that he might be a private individual or someone not extensively covered in mainstream news or notable online sources. If you have any specific context or additional details about this person, it could help in providing a more accurate identification or relevant information.
            <br />
            <br />

          </p>
          </div>


          <div className="chatFooter">
            <div className="inp">
              <input type="text" name="" placeholder="Enter a message..." />
              <button className="send">
                <img src={sendIcon} alt="SendChat" className="SendChat" /></button>
            </div>
            <br />
            <center>

              <p className="txt">ChatGPT can make mistakes. Consider checking important information.</p>
              
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
