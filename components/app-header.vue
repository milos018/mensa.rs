<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  //   { name: "Glavna", href: "/" },
  { name: "Testiranje", href: "#" },
  { name: "Aktivnosti", href: "#" },
  { name: "Clanovi", href: "#" },
  { name: "Lokalne Mense", href: "#" },
  { name: "Sig | Sight", href: "#" },
  { name: "Publikacije", href: "#" },
  { name: "Kontakt", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <NuxtLink href="#" class="-m-1.5 flex flex-1 items-center p-1.5">
        <span class="sr-only">Your Company</span>
        <h4 class="flex items-center text-2xl font-bold">
          mensa<span class="text-violet-600">.rs</span>
        </h4>
      </NuxtLink>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-10">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-violet-600/80"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm leading-6 text-gray-900"
          >Prijava <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <h4 class="flex items-center text-2xl font-bold">
              mensa<span class="text-violet-600">.rs</span>
            </h4>
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <NuxtLink
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Prijava
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
