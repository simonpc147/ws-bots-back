const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client


console.log('iniciando sesión');

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
        console.log(qr);
    });
    
    client.initialize();
    

    client.on('authenticated', () => {
        console.log('Inicio de sesión exitoso!');
        
    });

    client.on('auth_failure', (msg) => {
      console.error('Error al iniciar sesión', msg);
    });

    client.on('disconnected', (reason) => {
      console.log(`La sesión de WhatsApp se ha desconectado: ${reason}`);
    });


    client.on('ready', () => {
        console.log('WhatsApp Web está listo!');
    });

    client.on('message', message => {
        console.log();
        if(message.body === 'Hola mundo') {
            client.sendMessage(message.from, 'Hola soy un bot, mi creador esta ocupado');
        }
});
 

