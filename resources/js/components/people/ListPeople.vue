<template>
	<div class="container">
		<h1>People List</h1>

		<vue-table v-bind="{data:people.data,columns}"></vue-table>

		<vue-pagination  :pagination="people"
                     @paginate="getPeople"
                     :offset="4">
    	</vue-pagination>
	</div>
</template>


<script>

import VueTable from './Table'; 
import VuePagination from './Pagination'; 

export default{ 
	name: 'LisItem',
	data(){
		return {
			columns:[
				'id','name','address'
			],
			people: {
	            total: 0,
	            per_page: 2,
	            from: 1,
	            to: 0,
	            current_page: 1 ,
	            data:[],
	        },
	        offset: 4,
		}
	}, 
	components : {
		'vue-table' : VueTable,
		'vue-pagination': VuePagination
	},
	mounted(){
		this.getPeople();
	},
	methods:{ 

		getPeople(page = 1) {
            axios.get(`/api/people?page=${page}`)
                .then((response) => {
                    this.people = response.data;
                })
                .catch(() => {
                    console.log('handle server error from here');
                });
        }

	},
}
</script>