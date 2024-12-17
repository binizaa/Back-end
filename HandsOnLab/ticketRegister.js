class TicketManager {
    #priceBasisProfit = 0.15

    constructor(){
        this.events = []
    }

    getEvents(){ /** Show events */
        return this.events 
    }

    addEvent(name, place, price, capacity = 50, date  = new Date().toISOString()){
        const id = this.events.length + 1;
        const participants = []
        this.events.push({id, name, place, price:  price * (1 + this.#priceBasisProfit), capacity, date, participants})
    }

    addUser(idEvent, idUser){ 

        const  selectedEvent = this.events.find(event => event.id === idEvent)

        if(!selectedEvent) throw new Error("This event doesn't exist")

        if(selectedEvent.participants.includes(idUser)){
            console.log("The user has alredy registered for this event")
            return
        }

        selectedEvent.participants.push(idUser)

    }

    putEventOnTour(eventId, newPlace, newDate){
        const  selectedEvent = this.events.find(event => event.id === eventId)

        if(!selectedEvent) throw new Error("This event doesn't exist")

        this.events.push({...selectedEvent , id: this.events.length + 1, place: newPlace, date: newDate, participants: []})
    }
}

const ticketera = new TicketManager();

ticketera.addEvent("Recital de Madonna", "Cordoba", 30000, 10000);
ticketera.addUser(1, 33);
const events = ticketera.getEvents();

ticketera.putEventOnTour(1, "Buenos Aires", "22/03/2025");

const newEvents = ticketera.getEvents();

console.log({ newEvents });
