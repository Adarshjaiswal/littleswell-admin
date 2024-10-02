<!-- code by Adarsh Jaiswal (adarshjaiswal.com) -->
<script setup>
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import loginimage from '@images/loginimage.svg'
import rklogo from '@images/rakshak-logo.png'
import axios from 'axios'
import { VForm } from 'vuetify/components/VForm'
// import logoo from '@images/logo.png'`
import { themeConfig } from '@themeConfig'
import {
emailValidator,
requiredValidator,
} from '@validators'

// const boyWithRocket = useGenerateImageVariant(boyWithRocketLight, boyWithRocketDark)
const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()
const errormessage = ref(false)
const successmessage = ref(false)
const errorMessageText = ref('')

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const login = () => {
  axios.post('/api/web/admin-login', {
    email: email.value,
    password: password.value,
  }).then(response => {
    console.log(response);
    if (response.status === 200) {
      successmessage.value = true;
      const { accessToken, userData, userAbilities } = response.data;

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities));
      ability.update(userAbilities);
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      // Redirect to `to` query if exists or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/');
      
    } else {
      errormessage.value = true;

    }
    //console.log(response.data);

  }).catch(e => {
    //const { errors: formErrors } = e.response.data
    errormessage.value = true;
    errorMessageText.value = 'Invalid Credentials 😔';
    // errors.value = formErrors
    // console.error(e);
  });
};


const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}
</script>

<template>
  <VRow no-gutters class="auth-wrapper">

    <VSnackbar v-model="errormessage" location="top end" variant="flat" color="error">
      {{ errorMessageText }}
    </VSnackbar>
    <!-- Error snackbar -->
    <VSnackbar v-model="successmessage" location="top end" variant="flat" color="success">
      Request Sucessful :)
    </VSnackbar>
    <VCol lg="8" class="d-none d-lg-flex">
      <!-- illustration -->
      <div class="position-relative w-100 pa-8">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg max-width="800" :src="loginimage" class="auth-illustration" />
          <!-- <VCardText>
            <h6 class="text-h6 mb-1">
              Welcome to {{ themeConfig.app.title }}! 👋🏻
            </h6>
            <p class="mb-0">
              Please sign-in to your account
            </p>
          </VCardText> -->
        </div>
      </div>
    </VCol>

    <VCol cols="12" lg="4" class="d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-6">

        <center>
         
          <VCardText>
            <h6 class="text-h6 mb-1">
              Welcome to {{ themeConfig.app.title }}! 👋🏻
            </h6>

            <p class="mb-0">
              Please sign-in to your account
            </p>
          </VCardText>
        </center>

        <!-- 
        <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-caption mb-2">
              Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
            </p>

            <p class="text-caption mb-0">
              Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText> -->

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField v-model="email" label="Email" type="email" :rules="[requiredValidator, emailValidator]"
                  :error-messages="errors.email" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField v-model="password" label="Password" :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'" :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-6">
                  <VCheckbox v-model="rememberMe" label="Please Remember me" />
                  <!-- <RouterLink class="text-primary text-sm ms-2 mb-1" :to="{ name: 'forgot-password' }">
                    Forgot Password?
                  </RouterLink> -->
                </div>

                <VBtn block type="submit" class="mb-1">
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <!-- <VCol cols="12" class="text-center">
                <span>New on our platform?</span>
                <RouterLink class="text-primary ms-2" :to="{ name: 'register' }">
                  Create an account
                </RouterLink>
              </VCol> -->

              <VCol cols="12" class="d-flex align-center">

              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <!-- <AuthProvider /> -->
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
