import SplashScreen from './SplashScreen';

interface ChatModalProps {
  chatMaximized: boolean;
  handleChatMaximize: () => void;
  handleChatToggle: () => void;
  handleChatRestore: () => void;
}
const ChatModal: React.FC<ChatModalProps> = ({ chatMaximized, handleChatMaximize, handleChatToggle, handleChatRestore }) => {
  return (
    <div className={ `chat-modal ${ chatMaximized ? "maximized" : "restored" }`} > 
      <div className="chat-modal-content">
        <div className="chat-header">
          <h2>De-Light<small><sub>Plus Chat</sub></small></h2>
          <div className="chat-controls">
            <button
              onClick={handleChatToggle}
              className="control-btn minimize-btn"
            > _
            </button>

            {
              chatMaximized ? (
                <button
                  onClick={handleChatRestore}
                  className="control-btn restore-btn"
                >
                  ◱
                </button>
              ) : (
                <button
                  onClick={handleChatMaximize}
                  className="control-btn maximize-btn"
                >
                  ▢
                </button>
              )
            }

          </div>
        </div>

        <SplashScreen onFinish={handleChatToggle} />
      </div>
    </div>
  )
}

export default ChatModal