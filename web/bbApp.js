var bbApp = new Vue({
    el: '#bbApp',
    data: {
        // The BlockBeat class connecting to BigChainDB
        blockBeat: new blockbeat_module.BlockBeat(),

        // General
        title: "BlockBeat",
        slogan: "Take distribution to heart",

        // Routing
        activePane: "login",

        // User
        currentUser: undefined,

        // inputfields
    },
    methods: {
        isActive(pane)
        {
            return (this.activePane == pane);
        },
        setActive(pane)
        {
            this.activePane = pane;
        },
        isLoggedIn() 
        {
            return (typeof this.currentUser != "undefined");
        },
        logIn()
        {

        }

    }
});