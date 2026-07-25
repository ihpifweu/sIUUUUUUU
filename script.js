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

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const text = inputField.value.trim();

    if (text === '') return;

    appendMessage(text, 'user');
    inputField.value = '';

    setTimeout(() => {
        let reply = "";
        const lowerText = text.toLowerCase();

        if (lowerText.includes("موقع") || lowerText.includes("html") || lowerText.includes("website") || lowerText.includes("css")) {
            reply = `تفضل يا علاوي هذا كود موقع احترافي متكامل جاهز للنسخ:\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n    <meta charset="UTF-8">\n    <title>موقع احترافي</title>\n    <style>\n        body { background: #0f172a; color: #fff; font-family: sans-serif; text-align: center; padding: 50px; }\n        .card { background: #1e293b; padding: 20px; border-radius: 12px; display: inline-block; }\n        h1 { color: #3b82f6; }\n    </style>\n</head>\n<body>\n    <div class="card">\n        <h1>مرحباً بك يا علاوي!</h1>\n    </div>\n</body>\n</html>\n\`\`\``;
        } else if (lowerText.includes("حساب") || lowerText.includes("تسجيل")) {
            reply = `نظام الحسابات والبيانات في Nexus Studio يعمل حالياً بذاكرة المتصفح المحلية (LocalStorage) لحفظ مشاريعك وجلساتك بكل أمان!`;
        } else {
            reply = `أهلاً بك يا علاوي! تم استلام طلبك: "${text}"\nالنظام يعمل بكفاءة تامة لتوليد الأكواد والمواقع.`;
        }

        appendMessage(reply, 'ai');
    }, 600);
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

