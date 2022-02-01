/**
 * @author pawel
 * @name LightshotRoulette
 * @version 0.0.1
 * @description Sends random lightshot screenshot
 */

module.exports = class lightlette {
    start() {
        BdApi.findModuleByProps("BUILT_IN_COMMANDS").BUILT_IN_COMMANDS.push({
            applicationId: "-1",
            description: "xd3",
            execute: () => {
                function randomstring(numberOfCharacters) {
                    var value = '';
                    var stringValues = 'abcdefghijklmnoprstuxwyz0123456789';  
                    var sizeOfCharacter = stringValues.length;  
                 for (var i = 0; i < numberOfCharacters; i++) {
                    value = value+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
                    }
                    return value;
                 } 
                // for(let i=0;i<1;i++){ bd potrzebne do wylsania wiecej nzi 1 na raz :O
                    BdApi.findModuleByProps("sendMessage").sendMessage(BdApi.findModuleByProps("getLastSelectedChannelId").getChannelId(), {content: `https://prnt.sc/${randomstring(6)}`})
                // }
            },
            id: "-10",
            // options: [{ name: "count", type: 4, description: "count", required: false }], bd potrzebne do wylsania wiecej nzi 1 na raz :O
            name: "323123123",
            target: 1,
            type: 1
        })
    }
    stop() {
    }
}