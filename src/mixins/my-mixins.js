import moment from 'moment'

export const mixin1 = {    
    filters: {
        formatDate(value, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        },

        diffForHumans(value) {
            return moment(value).from(moment());
        }
    }
}