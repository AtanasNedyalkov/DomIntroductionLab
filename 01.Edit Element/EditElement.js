function editElement(ref, match, replacer) {
        let text = ref.textContent;
        text = text.replaceAll(match,replacer);
        ref.textContent = text;
    
    }
    let element = document.getElementById('e1');
    edit(element, 'Hello,%insert name here%', 'Document Object Model')
