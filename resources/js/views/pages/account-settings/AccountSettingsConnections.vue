<script setup>
import asana from '@images/icons/brands/asana.png'
import behance from '@images/icons/brands/behance.png'
import dribbble from '@images/icons/brands/dribbble.png'
import facebook from '@images/icons/brands/facebook.png'
import github from '@images/icons/brands/github.png'
import google from '@images/icons/brands/google.png'
import intagram from '@images/icons/brands/instagram.png'
import mailchimp from '@images/icons/brands/mailchimp.png'
import slack from '@images/icons/brands/slack.png'
import twitter from '@images/icons/brands/twitter.png'

const connectedAccounts = ref([
  {
    logo: google,
    name: 'Google',
    subtitle: 'Calendar and contacts',
    connected: true,
  },
  {
    logo: slack,
    name: 'Slack',
    subtitle: 'Communication',
    connected: false,
  },
  {
    logo: github,
    name: 'GitHub',
    subtitle: 'Manage your Git repositories',
    connected: true,
  },
  {
    logo: mailchimp,
    name: 'MailChimp',
    subtitle: 'Email marketing service',
    connected: true,
  },
  {
    logo: asana,
    name: 'Asana',
    subtitle: 'Task management',
    connected: false,
  },
])

const socialAccounts = ref([
  {
    logo: facebook,
    name: 'Facebook',
    connected: false,
  },
  {
    logo: twitter,
    name: 'Twitter',
    links: {
      username: '@ThemeSelection',
      link: 'https://twitter.com/Theme_Selection',
    },
    connected: true,
  },
  {
    logo: intagram,
    name: 'Instagram',
    links: {
      username: '@ThemeSelection',
      link: 'https://www.instagram.com/themeselection/',
    },
    connected: true,
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    connected: false,
  },
  {
    logo: behance,
    name: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 Connected Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        title="Connected Accounts"
        subtitle="Display content from your connected accounts on your site"
      >
        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="item in connectedAccounts"
              :key="item.logo"
              :title="item.name"
            >
              <template #prepend>
                <VAvatar
                  start
                  size="36"
                >
                  <VImg
                    :src="item.logo"
                  />
                </VAvatar>
              </template>

              <VListItemSubtitle class="text-sm">
                {{ item.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <VSwitch
                    v-model="item.connected"
                    density="compact"
                    class="me-1"
                  />
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Social Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard
        title="Social Accounts"
        subtitle="Display content from social accounts on your site"
      >
        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="item in socialAccounts"
              :key="item.logo"
              :title="item.name"
            >
              <template #prepend>
                <VAvatar
                  start
                  size="36"
                >
                  <VImg
                    :src="item.logo"
                    height="30"
                  />
                </VAvatar>
              </template>

              <VListItemSubtitle
                v-if="item.links?.link"
                tag="a"
                :href="item.links?.link"
                style="opacity: 1;"
              >
                {{ item.links?.username }}
              </VListItemSubtitle>

              <VListItemSubtitle
                v-else
                class="text-sm"
              >
                Not Connected
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <VBtn
                    icon
                    variant="tonal"
                    size="small"
                    :color="item.connected ? 'error' : 'secondary'"
                    class="rounded"
                  >
                    <VIcon
                      size="20"
                      :icon="item.connected ? 'bx-trash-alt' : 'bx-link' "
                    />
                  </VBtn>
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem !important;
}
</style>
