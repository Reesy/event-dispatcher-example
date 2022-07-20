import InMemoryDispatcher from "./Dispatcher"
import { eventNames, eventBody, dispatcher} from "./Dispatcher"


let main = () => {

    let dispatcher : dispatcher  = new InMemoryDispatcher();

    let logEventBody = (body: eventBody) => {
        console.log(body);
    };

    
    dispatcher.addListener(eventNames.newChatMessage, logEventBody);

    let testData: eventBody =
    {
        sender: 'a4bfc5bc-48c0-4624-8315-4d8b32fc777e',
        target: '81a68279-388a-4af7-b0d4-c7bbc6f0039f',
        message: 'Hello world',
    }

    dispatcher.dispatch(eventNames.newChatMessage, testData );

};

main();