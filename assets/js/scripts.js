// Open and Close the Chatbot Window
document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.querySelector(".chatbot-btn");
    const chatbotWindow = document.querySelector(".chatbot-window");
    const closeBtn = document.querySelector(".close-btn");

    // Toggle the chatbot window visibility
    chatbotButton.addEventListener("click", function () {
        chatbotWindow.classList.toggle("open");
    });

    // Close the chatbot window
    closeBtn.addEventListener("click", function () {
        chatbotWindow.classList.remove("open");
    });

    // Handle sending a message
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");

    sendButton.addEventListener("click", function () {
        const messageText = userInput.value.trim();
        if (messageText) {
            displayUserMessage(messageText);
            userInput.value = ''; // Clear input field
            // Example response from chatbot
            setTimeout(function () {
                displayBotResponse("Hello! How can I assist you?");
            }, 1000);
        }
    });

    // Display user message
    function displayUserMessage(message) {
        const messageContainer = document.getElementById("message-container");
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = message;
        messageContainer.appendChild(userMessage);
        messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
    }

    // Display bot response
    function displayBotResponse(message) {
        const messageContainer = document.getElementById("message-container");
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = message;
        messageContainer.appendChild(botMessage);
        messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
    }
});
