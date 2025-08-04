
function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message !== '') {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
  }
}
