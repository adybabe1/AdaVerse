// Open the chatbot window
function openChatbot() {
    document.getElementById('chatbot-window').style.display = 'flex';
    document.getElementById('chatbot-input').focus();
}

// Close the chatbot window
function closeChatbot() {
    document.getElementById('chatbot-window').style.display = 'none';
}

// Function to send a message
function sendMessage(event) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById('chatbot-input');
        const message = inputField.value.trim();

        if (message) {
            // User message
            appendMessage(message, 'user');

            // Clear the input field
            inputField.value = '';

            // Scroll to the latest message
            scrollToBottom();

            // Simulate Synthara AI bot response
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                appendMessage(botResponse, 'bot');
                scrollToBottom();
            }, 1000);
        }
    }
}

// Append a message to the chat window
function appendMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message');
    messageContainer.classList.add(sender);
    messageContainer.textContent = message;
    messagesContainer.appendChild(messageContainer);
}

// Scroll to the bottom of the chat
function scrollToBottom() {
    const messagesContainer = document.getElementById('chatbot-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate Synthara AI bot response (Enhanced to highlight capabilities)
function generateBotResponse(userMessage) {
    const responses = {
        "hello": "Hello! I am Synthara AI, your intelligent assistant. How can I help you today?",
        "what is ai?": "AI stands for Artificial Intelligence, and it's revolutionizing industries like marketing, finance, and healthcare. I can help you learn more or assist with AI-driven strategies!",
        "help": "Absolutely! What would you like assistance with? I can guide you through branding strategies, marketing, or AI tools.",
        "how can you help my business?": "Synthara AI can enhance your business by optimizing digital marketing strategies, automating customer interactions, and providing insights to improve your branding efforts. Let's chat about how we can make it happen!",
        "what is synthara?": "Synthara is the next-generation AI platform that powers intelligent customer engagement, helping businesses grow and succeed with innovative digital strategies.",
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "Thank you for reaching out! I’m here to help you grow with AI-driven strategies. How can I assist you further?";
}
