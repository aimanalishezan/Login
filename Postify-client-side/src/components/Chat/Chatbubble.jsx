// const Chatbubble= ({  }) => {
//  return (
//     <div className="chatbubble-container">
//       <div className="chatbubble">
//         <div className="chatbubble-header">
//           <h2>Chat</h2>
//         </div>
//         <div className="chatbubble-body">
//           <p>This is a chat bubble.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Chatbubble;
import React, { useState, useEffect } from 'react';
import { BubbleChat } from 'flowise-embed-react';

export default function ChatBubble() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BubbleChat
      chatflowid="49aadb6e-ae5a-4639-85a4-3f0702ba3181"
      apiHost="https://flowiseai-railway-production-c79c.up.railway.app"
      chatflowConfig={{}}
      observersConfig={{
        observeUserInput: (input) => console.log('User Input:', input),
        observeLoading: (isLoading) => console.log('Loading State:', isLoading),
        observeMessages: (messages) => console.log('Messages:', messages),
      }}
      theme={{
        button: {
          backgroundColor: '#00ff99',
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: 'white',
          customIconSrc: 'https://png.pngtree.com/png-clipart/20230815/original/pngtree-chat-bot-icon-program-bot-illustration-vector-picture-image_10800531.png',
          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false,
          },
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'Hi There 👋!',
          tooltipBackgroundColor: 'black',
          tooltipTextColor: 'white',
          tooltipFontSize: 16,
        },
        disclaimer: {
          title: 'Disclaimer',
          message:
            'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
          textColor: 'black',
          buttonColor: '#3b82f6',
          buttonText: 'Start Chatting',
          buttonTextColor: 'white',
          blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundColor: 'white',
        },
        customCSS: ``,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'MAN.Ai',
          titleTextColor: '#303235',
          titleAvatarSrc: 'https://png.pngtree.com/png-clipart/20230815/original/pngtree-chat-bot-icon-program-bot-illustration-vector-picture-image_10800531.png',
          welcomeMessage: 'Hello! How can I assist you today?',
          errorMessage: 'This is a custom error message',
          backgroundColor: '#ffffff',
          backgroundImage: '',
          height: 700,
          width: 400,
          fontSize: 16,
          starterPrompts: ['What is an Agent?', 'Who are you?', 'How to reach out to Aiman'],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
          sourceDocsTitle: 'Sources:',
          renderHTML: true,
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: true,
            avatarSrc: 'https://png.pngtree.com/png-clipart/20230815/original/pngtree-chat-bot-icon-program-bot-illustration-vector-picture-image_10800531.png',
          },
          userMessage: {
            backgroundColor: '#00ff99',
            textColor: '#303235',
            showAvatar: true,
            avatarSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgaloyz-339e8f9f-d8dc-4d41-9a69-8766ffe7311a.png',
          },
          textInput: {
            placeholder: 'Type your question',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#3B81F6',
            maxChars: 100,
            maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 100 characters.',
            autoFocus: true,
            sendMessageSound: true,
            sendSoundLocation: 'send_message.mp3',
            receiveMessageSound: true,
            receiveSoundLocation: 'receive_message.mp3',
          },
          feedback: {
            color: '#303235',
          },
          dateTimeToggle: {
            date: true,
            time: true,
          },
          footer: {
            textColor: '#000000',
            text: 'Powered By',
            company: 'Aiman Ali Shezan',
            companyLink: 'https://github.com/aimanalishezan',
          },
        },
      }}
    />
  );
}
