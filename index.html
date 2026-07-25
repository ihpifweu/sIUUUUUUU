const API_KEY = "AQ.Ab8RN6Jxyb5MJPRadWoOzdjbuKN_J3ROCA48HTzxiakkr15mdA";

function appendMessage(text, sender) {
    const chatContainer = document.getElementById('chat-container');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    
    if (text.includes("```")) {
        msgDiv.innerHTML = text.replace(/```([a-zA-Z]*)([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    } else {
        msgDiv.textContent = text;
    }
    
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const text = inputField.value.trim();

    if (text === '') return;

    appendMessage(text, 'user');
    inputField.value = '';

    try {
        const response = await fetch(`[https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=$](https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=$){API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: text }] }]
            })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content) {
            const reply = data.candidates[0].content.parts[0].text;
            appendMessage(reply, 'ai');
        } else if (data.error) {
            appendMessage("خطأ من السيرفر: " + data.error.message, 'ai');
        } else {
            appendMessage("عذراً، لم يتم استلام رد صحيح من النظام.", 'ai');
        }
    } catch (error) {
        appendMessage("خطأ في الاتصال بالشبكة. تأكد من الإنترنت أو المفتاح.", 'ai');
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function toggleAuthModal() {
    alert("مرحباً بك يا علاوي! أنت مسجل الدخول حالياً كمدير للنظام (Admin Session Active).");
}
