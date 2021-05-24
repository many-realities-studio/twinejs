// The toolbar at the bottom of the screen with editing controls.

const Vue = require('vue');
const zoomMappings = require('../zoom-settings');
const { playStory, testStory } = require('../../common/launch-story');
const { updateStory } = require('../../data/actions/story');

require('./index.less');

module.exports = Vue.extend({
	template: require('./index.html'),

	props: {
		story: {
			type: Object,
			required: true
		},

		zoomDesc: {
			type: String,
			required: true
		}
	},

	components: {
		'story-menu': require('./story-menu'),
		'story-search': require('./story-search')
	},

	methods: {
		setZoom(description) {
			this.updateStory(this.story.id, { zoom: zoomMappings[description] });
		},

		test() {
			// TODO: Testing Story (Record)
			// eslint-disable-next-line no-console
			console.log("Playing story...");
			testStory(this.$store, this.story.id);
		},

		play() {
			// TODO: Play Story (Record)
			// eslint-disable-next-line no-console
			console.log("Playing story...");
			playStory(this.$store, this.story.id);
		},

		addPassage() {
			this.$dispatch('passage-create');
		}
	},

	vuex: {
		actions: {
			updateStory
		}
	}
});
