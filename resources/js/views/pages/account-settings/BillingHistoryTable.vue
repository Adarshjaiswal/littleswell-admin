<script setup>
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

const invoiceListStore = useInvoiceStore()
const searchQuery = ref('')
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref([])
const selectedRows = ref([])

// 👉 Fetch Invoices
watchEffect(() => {
  invoiceListStore.fetchInvoices({
    q: searchQuery.value,
    status: selectedStatus.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
})

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = invoices.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = invoices.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `${ firstIndex }-${ lastIndex } of ${ totalInvoices.value }`
})

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance, total) => {
  if (balance === total)
    return {
      status: 'Unpaid',
      chip: { color: 'error' },
    }
  if (balance === 0)
    return {
      status: 'Paid',
      chip: { color: 'success' },
    }
  
  return {
    status: balance,
    chip: { variant: 'text' },
  }
}

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'warning',
      icon: 'bx-line-chart',
    }
  if (status === 'Paid')
    return {
      variant: 'success',
      icon: 'bx-check',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'bx-down-arrow-alt',
    }
  if (status === 'Draft')
    return {
      variant: 'secondary',
      icon: 'bx-save',
    }
  if (status === 'Sent')
    return {
      variant: 'primary',
      icon: 'bx-envelope',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'bx-error-circle',
    }
  
  return {
    variant: 'secondary',
    icon: 'bx-x',
  }
}

const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Download',
      value: 'download',
      prependIcon: 'bx-download',
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
      to: {
        name: 'apps-invoice-edit-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Duplicate',
      value: 'duplicate',
      prependIcon: 'bx-layer',
    },
  ]
})
</script>

<template>
  <VCard
    v-if="invoices"
    id="invoice-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-3">
      <!-- 👉 Create invoice -->
      <VBtn
        prepend-icon="bx-plus"
        :to="{ name: 'apps-invoice-add' }"
        class="me-3"
      >
        Create invoice
      </VBtn>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-3">
        <!-- 👉 Search  -->
        <div class="invoice-list-search">
          <VTextField
            v-model="searchQuery"
            placeholder="Search Invoice"
            density="compact"
            class="me-3"
          />
        </div>
        <div class="invoice-list-status">
          <VSelect
            v-model="selectedStatus"
            label="Select Status"
            clearable
            clear-icon="bx-x"
            density="compact"
            :items="['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due', 'Sent']"
          />
        </div>
      </div>
    </VCardText>

    <VDivider />
    <!-- SECTION Table -->
    <VTable class="text-no-wrap"  height="27rem" fixed-header>
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <th scope="col">
            #ID
          </th>
          <th scope="col">
            <VIcon icon="bx-trending-up" />
          </th>
          <th scope="col">
            CLIENT
          </th>
          <th scope="col">
            TOTAL
          </th>
          <th scope="col">
            ISSUED DATE
          </th>
          <th scope="col">
            BALANCE
          </th>
          <th scope="col">
            <span class="ms-2">ACTIONS</span>
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="invoice in invoices"
          :key="invoice.id"
        >
          <!-- 👉 Id -->
          <td>
            <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
              #{{ invoice.id }}
            </RouterLink>
          </td>

          <!-- 👉 Trending -->
          <td>
            <VTooltip>
              <template #activator="{ props }">
                <VAvatar
                  :size="30"
                  v-bind="props"
                  :color="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant"
                  variant="tonal"
                >
                  <VIcon
                    :size="20"
                    :icon="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).icon"
                  />
                </VAvatar>
              </template>
              <p class="mb-0">
                {{ invoice.invoiceStatus }}
              </p>
              <p class="mb-0">
                Balance: {{ invoice.balance }}
              </p>
              <p class="mb-0">
                Due date: {{ invoice.dueDate }}
              </p>
            </VTooltip>
          </td>

          <!-- 👉 Client Avatar and Email -->
          <td>
            <div class="d-flex align-center">
              <VAvatar
                size="33"
                variant="tonal"
                :color="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant"
                class="me-3"
              >
                <VImg
                  v-if="invoice.avatar.length"
                  :src="invoice.avatar"
                />
                <span
                  v-else
                  class="text-sm"
                >{{ avatarText(invoice.client.name) }}</span>
              </VAvatar>
              <div class="d-flex flex-column">
                <h6 class="text-sm font-weight-medium mb-0">
                  {{ invoice.client.name }}
                </h6>
                <span class="text-caption">{{ invoice.client.companyEmail }}</span>
              </div>
            </div>
          </td>

          <!-- 👉 total -->
          <td>${{ invoice.total }}</td>

          <!-- 👉 Date -->
          <td>{{ invoice.issuedDate }}</td>

          <!-- 👉 Balance -->
          <td class="text-high-emphasis">
            <VChip
              v-bind="resolveInvoiceBalanceVariant(invoice.balance, invoice.total).chip"
              density="compact"
            >
              {{ resolveInvoiceBalanceVariant(invoice.balance, invoice.total).status }}
            </VChip>
          </td>

          <!-- 👉 Actions -->
          <td style="width: 7.5rem;">
            <IconBtn>
              <VIcon icon="bx-trash-alt" />
            </IconBtn>

            <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
              <VIcon icon="bx-show" />
            </IconBtn>

            <MoreBtn
              :menu-list="computedMoreList(invoice.id)"
              item-props
            />
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!invoices.length">
        <tr>
          <td
            colspan="8"
            class="text-center text-body-1"
          >
            No data available
          </td>
        </tr>
      </tfoot>
    </VTable>
    <!-- !SECTION -->

    <VDivider />

    <!-- SECTION Pagination -->
    <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
      <!-- 👉 Rows per page -->
      <div
        class="d-flex align-center me-3"
        style="width: 171px;"
      >
        <span class="text-sm text-no-wrap me-3">Rows per page:</span>

        <VSelect
          v-model="rowPerPage"
          variant="plain"
          :items="[10, 20, 30, 50]"
          class="mt-n4"
        />
      </div>

      <!-- 👉 Pagination and pagination meta -->
      <div class="d-flex align-center">
        <span class="text-sm">{{ paginationData }}</span>

        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="1"
          :length="totalPage"
          @next="selectedRows = []"
          @prev="selectedRows = []"
        />
      </div>
    </VCardText>
  <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-status {
    inline-size: 15rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
