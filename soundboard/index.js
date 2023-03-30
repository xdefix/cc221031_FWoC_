const sounds = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom'];

// 1. Render Audio Tags

sounds.forEach((sound) => {
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'true');
    audio.setAttribute('src', `/sounds/${sound}.wav`);
    audio.setAttribute('preload', 'auto');

    document.getElementById('audios').append(audio);
});

// 2. Render Button Tags

sounds.forEach((sound) => {
    const button = document.createElement('button');
    button.textContent = sound;

    document.getElementById('buttons').append(button);
});

// 3. Connect Button and Audios together
