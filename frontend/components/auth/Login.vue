<template>
  <section class="hero is-fullheight login-bg">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <!-- <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure> -->
            <form @keyup.enter.prevent="loginUser()" @keydown="form.errors.clear($event.target.name)">
            {{token}}
              <div class="field">
              	<p v-if="form.errors.has('message')" v-text="form.errors.get('message')" class="help is-danger"></p>
              	<p v-if="form.errors.has('non_field_errors')" v-text="form.errors.get('non_field_errors')" class="help is-danger"></p>
                <div class="control">
                  <input v-model="form.username" class="input is-large" type="email" placeholder="Your Username" autofocus="">
                  <p v-if="form.errors.has('username')" v-text="form.errors.get('username')" class="help is-danger"></p>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input v-model="form.password" class="input is-large" type="password" placeholder="Your Password">
                  <p v-if="form.errors.has('password')" v-text="form.errors.get('password')" class="help is-danger"></p>
                </div>
              </div>
              <!-- <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div> -->
              <a @click="loginUser()" :class="{'is-loading': loading}" :disabled="form.errors.any()" class="button is-block is-info is-large">Login</a>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from '../../form'
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'login',
	created () {
	},
	data () {
    let form = new Form({
      username: '',
      password: ''
    });

    form.fetch = this.login;
    
		return {
			form: form,
			loading: false
		}
	},
	computed: {
		...mapGetters({token: 'user/getToken'})
	},
	methods: {
		loginUser () {
			if (this.form.errors.any()) return;
			this.loading = true;
      this.form.submit().then(data => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('usernmae', this.form.username);
				this.init();
				this.loading = false;
			}).catch(() => {
				this.loading = false;
			});
		},
		...mapActions('user', ['init', 'login'])
	}
}

</script>

<style>
	.login-bg {
    background-color: #ededed;
  }
</style>