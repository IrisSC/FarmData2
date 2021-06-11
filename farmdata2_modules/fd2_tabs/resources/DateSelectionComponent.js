let DateSelectionComponent = {
    template: `<div>
            <slot></slot>
            <input data-cy="date-select" type="date" :min="earliestDate" :max="latestDate" id="date" v-model="selectedDate" @change="dateChanged" @focusout="checkBounds">
            </div>`,
    props: {
        defaultDate: {
            type: String,
            required: true,
        },
        earliestDate: {
            type: String,
        },
        latestDate: {
            type: String,
        },
    },
    data(){
        return {
            selectedDate: this.defaultDate,
        } 
    },
    methods: {
        dateChanged() {
            this.$emit('dateChanged', this.selectedDate)
        },
        checkBounds() {
            if (this.selectedDate > this.latestDate) {
                this.selectedDate = this.latestDate;
            }
            else if (this.selectedDate < this.earliestDate) {
                this.selectedDate = this.earliestDate;
            }
        }
    },
}

try {
    module.exports = {
        DateSelectionComponent: DateSelectionComponent
    }
}
catch(err) {}