import {http} from './settings'

export default {
	lista: () => { return http.get('/shorteneds/')}
}