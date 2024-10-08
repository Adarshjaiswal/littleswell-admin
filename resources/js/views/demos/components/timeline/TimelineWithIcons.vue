<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pdf from '@images/icons/project-icons/pdf.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'

const serverSwitch = ref(false)
</script>

<template>
  <VCard title="Timeline With Icons">
    <VCardText>
      <VTimeline
        align="start"
        line-inset="20"
        truncate-line="start"
        justify="center"
        :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="error"
                variant="tonal"
              >
                <VIcon
                  icon="bxs-plane-alt"
                  size="20"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap">
            <h6 class="text-sm font-weight-medium me-3">
              Get on the flight
            </h6>
            <small class="text-xs my-1">Wednesday</small>
          </div>

          <!-- 👉 Content -->
          <p class="mb-1">
            <span>Charles de Gaulle Airport, Paris</span>
            <VIcon
              size="20"
              icon="bx-right-arrow-alt"
              class="mx-2"
            />
            <span>Heathrow Airport, London</span>
          </p>

          <p>6:30 AM</p>

          <div class="d-flex align-center">
            <img
              :src="pdf"
              width="28"
              class="me-2"
              alt="img"
            >

            <h6 class="font-weight-medium text-sm">
              booking-card.pdf
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview -->
        <VTimelineItem
          fill-dot
          size="small"
          class="text-start"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="success"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="bx-time-five"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap">
            <h6 class="text-sm font-weight-medium me-3">
              Interview Schedule
            </h6>
            <small class="text-xs text-no-wrap my-1">April, 18</small>
          </div>

          <p class="mb-0">
            Bonbon gummies caramels brownie topping fruitcake gingerbread jelly-o marzipan.
          </p>

          <!-- 👉 Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <!-- 👉 Avatar & Personal Info -->
            <span class="d-flex align-bottom mt-2">
              <VAvatar
                size="32"
                :image="avatar2"
                class="me-2"
              />
              <div>
                <h6 class="text-sm font-weight-medium">Rebecca Godman</h6>
                <span>Javascript Developer</span>
              </div>
            </span>

            <!-- 👉 Person Actions -->
            <div>
              <IconBtn
                size="32"
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="bx-message"
                />
              </IconBtn>
              <IconBtn size="32">
                <VIcon
                  size="20"
                  icon="bx-phone"
                />
              </IconBtn>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="warning"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="bx-cart"
                />
              </VAvatar>
            </div>
          </template>

          <div class="d-flex align-start flex-sm-row flex-column mb-3">
            <VImg
              aspect-ratio="1"
              width="100"
              :src="pumaShoes"
              class="rounded me-4"
            />

            <div>
              <!-- Header -->
              <div class="d-flex justify-space-between flex-wrap">
                <h6 class="font-weight-medium text-sm me-3">
                  Sold Puma POPX Blue Color
                </h6>
                <small class="text-xs text-no-wrap my-1">January, 10</small>
              </div>
              <span>PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
            </div>
          </div>

          <!-- 👉 Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
            <div class="text-sm-center">
              <h6 class="text-base font-weight-medium mb-1">
                Customer
              </h6>
              <span class="text-xs">Micheal Scott</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-base font-weight-medium mb-1">
                Price
              </h6>
              <span class="text-xs">$375.00</span>
            </div>
            <div class="text-sm-center">
              <h6 class="text-base font-weight-medium mb-1">
                Quantity
              </h6>
              <span class="text-xs">1</span>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Design Review -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="info"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="bx-edit"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap">
            <h6 class="text-sm font-weight-medium me-3">
              Design Review
            </h6>
            <small class="text-xs text-no-wrap my-1">September, 20</small>
          </div>

          <!-- 👉 Content -->
          <p>
            Weekly review of freshly prepared design for our new application.
          </p>
          <div class="d-flex align-center">
            <VAvatar
              size="32"
              :image="avatar1"
              class="me-2"
            />
            <h6 class="text-sm font-weight-medium">
              John Doe (Client)
            </h6>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Ubuntu Server -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="error"
                variant="tonal"
              >
                <VIcon
                  size="18"
                  icon="bx-server"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap">
            <h6 class="text-sm font-weight-medium">
              Ubuntu Server
            </h6>

            <VChip
              color="error"
              size="small"
            >
              Inactive
            </VChip>
          </div>

          <!-- 👉 Content -->
          <table class="w-100 mt-3">
            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  icon="bx-planet"
                  class="me-1"
                />
                <span>IP Address</span>
              </td>

              <td class="text-right">
                192.654.8.566
              </td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  size="24"
                  icon="bx-chip"
                  class="me-1"
                />
                <span>CPU</span>
              </td>

              <td class="text-right">
                4 Cores
              </td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <VIcon
                  icon="bx-microchip"
                  size="24"
                  class="me-1"
                />
                <span>Memory</span>
              </td>

              <td class="text-right">
                2 GB
              </td>
            </tr>
          </table>

          <VDivider class="mt-3" />
          <div class="d-flex justify-space-between align-end">
            <div>
              <IconBtn
                size="32"
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="bx-share-alt"
                />
              </IconBtn>
              <IconBtn size="32">
                <VIcon
                  size="20"
                  icon="bx-refresh"
                />
              </IconBtn>
            </div>

            <VSwitch v-model="serverSwitch" />
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Location -->
        <VTimelineItem
          fill-dot
          size="small"
        >
          <template #icon>
            <div class="v-timeline-avatar-wrapper rounded-circle">
              <VAvatar
                size="32"
                color="success"
                variant="tonal"
              >
                <VIcon
                  size="20"
                  icon="bx-map"
                />
              </VAvatar>
            </div>
          </template>

          <!-- 👉 Header -->
          <div class="d-flex justify-space-between flex-wrap mb-1">
            <div class="d-flex align-end">
              <VIcon
                icon="bx-map"
                class="me-1"
              />
              <h6 class="text-sm font-weight-medium">
                <span>Location</span>
              </h6>
            </div>

            <VChip
              color="error"
              size="small"
            >
              High
            </VChip>
          </div>

          <!-- 👉 Content -->
          <h6 class="text-sm font-weight-medium mb-1">
            Find location for the company celebration.
          </h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <VDivider />

          <div class="d-flex justify-space-between mt-4 flex-wrap">
            <div>
              <IconBtn
                size="32"
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="bx-link"
                />
              </IconBtn>

              <IconBtn
                size="32"
                class="me-2"
              >
                <VIcon
                  size="20"
                  icon="bx-message"
                />
              </IconBtn>
              <IconBtn size="32">
                <VIcon
                  size="20"
                  icon="bx-user"
                />
              </IconBtn>
            </div>

            <span>Due date: 15th Jan</span>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.v-timeline-avatar-wrapper {
  background-color: rgb(var(--v-theme-surface));
}
</style>
