// Define the storyBeast object
const storyBeast = {
    // Variables with different data types
    title: "The Quest for the Mythical Artifact",  // string
    heroName: "Aria",  // string
    currentChapter: 1,  // number
    hasArtifact: false,  // boolean
    inventory: ["map", "sword", "shield"],  // array of strings
    villain: {  // object
        name: "Dark Lord",
        powerLevel: 9000
    },

    // Function to start the story
    startStory: function() {
        console.log(`Welcome to the story: ${this.title}`);
        console.log(`Our hero, ${this.heroName}, is starting their adventure.`);
        this.introduction();
        this.encounterVillain();
        this.findArtifact();
    },

    // Function to introduce the hero and their inventory
    introduction: function() {
        console.log(`Chapter ${this.currentChapter}: Introduction`);
        console.log(`${this.heroName} is ready for the journey.`);
        console.log(`${this.heroName}'s inventory: ${this.inventory.join(', ')}`);
        this.currentChapter++;
    },

    // Function for the hero to encounter the villain
    encounterVillain: function() {
        console.log(`Chapter ${this.currentChapter}: The Encounter`);
        console.log(`${this.heroName} encounters the ${this.villain.name} with a power level of ${this.villain.powerLevel}.`);
        
        if (this.villain.powerLevel > 8000) {
            console.log(`${this.heroName} decides to use the sword.`);
        } else {
            console.log(`${this.heroName} decides to use the shield.`);
        }

        // Change the boolean value
        if (!this.hasArtifact) {
            console.log(`${this.heroName} realizes they need the mythical artifact to defeat the ${this.villain.name}.`);
            this.hasArtifact = true;
        }
        this.currentChapter++;
    },

    // Function for the hero to find the artifact
    findArtifact: function() {
        console.log(`Chapter ${this.currentChapter}: The Discovery`);
        
        // Array of places to search
        const places = ["ancient ruins", "mystic forest", "abandoned castle"];
        const artifactFound = places.map((place, index) => {
            if (index === 2) {
                console.log(`${this.heroName} finds the artifact in the ${place}!`);
                return true;
            } else {
                console.log(`${this.heroName} searches the ${place}, but finds nothing.`);
                return false;
            }
        });
        
        if (artifactFound.includes(true)) {
            console.log(`${this.heroName} now possesses the mythical artifact.`);
        } else {
            console.log(`${this.heroName} did not find the artifact.`);
        }

        this.currentChapter++;
    }
};

// Start the story
storyBeast.startStory();
