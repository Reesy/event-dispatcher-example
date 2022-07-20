
export enum eventNames
{
    newChatMessage = "newChatMessage",
    userClicked = "userClicked"
};

export interface eventBody 
{
    sender: string;
    target: string; 
    message: string; 
}

export interface dispatcher 
{
    addListener(_eventName: eventNames, _callback: ( body: eventBody) => void ): void;
    removeListener(_eventName: eventNames, _callback: () => void ): void
    dispatch(_eventName: eventNames, body: eventBody): void;
};

export default class InMemoryDispatcher implements dispatcher
{
    private callbacks = new Map<eventNames, ( body: eventBody ) => void>;
    
    public addListener(_eventName: eventNames, _callback: ( body: eventBody) => void ): void
    {   
        this.callbacks.set(_eventName, _callback);
    };

    public removeListener(_eventName: eventNames, _callback: () => void ): void
    {   
        this.callbacks.delete(_eventName);
    };

    public dispatch(_eventName: eventNames, body: eventBody): void
    {
        let targetCallback = this.callbacks.get(_eventName)

        if (typeof(targetCallback) === "undefined")
        {
            return;
        }
        targetCallback(body);

    };
}