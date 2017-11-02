<template>
	<a @click="logout()"><slot>Logout</slot></a>
</template>


<script>
import {createNamespacedHelpers} from 'vuex'

const {mapActions} = createNamespacedHelpers('user')

export default {
	name: 'logout',
	methods: {
		...mapActions(['logout'])
	}
}

</script>

<style>
	
</style>