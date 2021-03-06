new Vue({
   el:"#app",
   data: {
      imgUrl: 'img/avatars/Avatar',
      user: {
         name: 'Nome Utente',
         avatar: '_4'
      },
      currentChatIndex: 0,
      searchText: "",
      lastVisits: [],
      chats: [
      	{
      		name: 'Michele',
      		avatar: '_1',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?Hai portato a spasso il cane?Hai portato a spasso il cane?Hai portato a spasso il cane?Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			},
               {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			},
               {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			},
               {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Fabio',
      		avatar: '_2',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Samuele',
      		avatar: '_3',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Luisa',
      		avatar: '_4',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ]
   },
   methods: {
      changeCurrentChat(index) {
         this.currentChatIndex = index;
      },
      sendMessage(event) {
         var date = dayjs().format('DD/MM/YYYY HH:mm:ss')
         this.chats[this.currentChatIndex].messages.push({
            date: date,
            text: event.target.value,
            status: 'sent'
         });
         event.target.value = "";
         this.responseMessage();

      },
      responseMessage() {
         var self = this;
         var date = dayjs().format('DD/MM/YYYY HH:mm:ss')
         this.lastVisits[this.currentChatIndex].lastVisit = date;
         setTimeout(function () {
            self.chats[self.currentChatIndex].messages.push({
               date: date,
               text: 'OK',
               status: 'received'
            });
         }, 1000)
         // console.log(this.lastVisits);
      },
      deleteMessage(index) {
         this.chats[this.currentChatIndex].messages.splice(index, 1);
         console.log(this.lastVisits);
      }
   },
   computed: {
      filterByName() {
         var filtered = [];
         this.chats.forEach((chat, index) => {
            if(chat.name.toLocaleLowerCase().includes(this.searchText)) {
               filtered.push(index);
            }
         })
         return filtered
      }
   },
   created: function() {
      this.chats.forEach(chat => {
         this.lastVisits.push({
            lastVisit: chat.messages[chat.messages.length - 1].date
         })
      })
      console.log(this.lastVisits);
   }
})
