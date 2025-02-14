import { SubmitKey } from "../store/config";
import { PartialLocaleType } from "./index";

const id: PartialLocaleType = {
  WIP: "Coming Soon...",
  ChatItem: {
    ChatItemCount: (count: number) => `${count} pesan`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} pesan`,
    Actions: {
      ChatList: "Buka Daftar Chat",
      CompressedHistory: "Ekspor Riwayat Terkompresi",
      Export: "Ekspor Semua Pesan sebagai Markdown",
      Copy: "Salin",
      Stop: "Berhenti",
      Retry: "Coba Lagi",
      Delete: "Hapus",
      Edit: "Edit",
    },
    Commands: {
      new: "Mulai Chat Baru",
      newt: "Mulai Chat Baru dengan templat",
      next: "Chat Selanjutnya",
      prev: "Chat Sebelumnya",
      clear: "Bersihkan Percakapan",
      del: "Hapus Chat",
    },
    InputActions: {
      Stop: "Berhenti",
      ToBottom: "Ke Bagian Bawah",
      Theme: {
        auto: "Otomatis",
        light: "Tema Terang",
        dark: "Tema Gelap",
      },
      Clear: "Bersihkan Percakapan",
      Settings: "Pengaturan",
    },
    Rename: "Ubah Nama Chat",
    Typing: "Mengetik...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} untuk mengirim`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter untuk membalut";
      }
      return (
        inputHints + ", / untuk mencari prompt, : untuk menggunakan perintah"
      );
    },
    Send: "Kirim",
    Config: {
      Reset: "Reset ke Default",
      SaveAs: "Simpan sebagai templat",
    },
  },
  Export: {
    Title: "Ekspor Pesan",
    Copy: "Salin Semua",
    Download: "Unduh",
    MessageFromYou: "Pesan dari Anda",
    MessageFromWebLLM: "Pesan dari Soir",
    Share: "Bagikan",
    Format: {
      Title: "Format Ekspor",
      SubTitle: "Markdown atau Gambar PNG",
    },
    IncludeContext: {
      Title: "Sertakan Konteks",
      SubTitle: "Apakah akan menyertakan masks",
    },
    Steps: {
      Select: "Pilih",
      Preview: "Pratinjau",
    },
  },
  Select: {
    Search: "Cari",
    All: "Pilih Semua",
    Latest: "Pilih Terbaru",
    Clear: "Bersihkan",
  },
  Memory: {
    Title: "Prompt Memori",
    EmptyContent: "Belum ada yang tersedia.",
    Send: "Kirim Memori",
    Copy: "Salin Memori",
    Reset: "Reset",
    ResetConfirm:
      "Jika Anda mereset, riwayat obrolan saat ini dan memori historis akan dihapus. Apakah Anda yakin ingin melakukan reset?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Anda yakin ingin menghapus percakapan yang dipilih?",
    DeleteToast: "Percakapan telah dihapus",
    Revert: "Kembali",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua Pengaturan",
    Danger: {
      Reset: {
        Title: "Setel Ulang Semua Pengaturan",
        SubTitle: "Mengembalikan semua pengaturan ke nilai default",
        Action: "Setel Ulang",
        Confirm:
          "Anda yakin ingin mengembalikan semua pengaturan ke nilai default?",
      },
      Clear: {
        Title: "Hapus Semua Data",
        SubTitle: "Semua data yang tersimpan secara lokal akan dihapus",
        Action: "Hapus",
        Confirm:
          "Apakah Anda yakin ingin menghapus semua data yang tersimpan secara lokal?",
      },
    },
    Lang: {
      Name: "Bahasa", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Ubah ukuran font konten chat",
    },
    InjectSystemPrompts: {
      Title: "Suntikkan Petunjuk Sistem",
      SubTitle:
        "Tambahkan petunjuk simulasi sistem ChatGPT di awal daftar pesan yang diminta dalam setiap permintaan",
    },
    InputTemplate: {
      Title: "Templat Input",
      SubTitle: "Pesan baru akan diisi menggunakan templat ini",
    },

    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Versi terbaru ditemukan: ${x}`,
      GoToUpdate: "Perbarui Sekarang",
    },
    AutoGenerateTitle: {
      Title: "Hasilkan Judul Otomatis",
      SubTitle: "Hasilkan judul yang sesuai berdasarkan konten percakapan",
    },
    SendKey: "Kirim",
    Theme: "Tema",
    TightBorder: "Batas Ketat",
    SendPreviewBubble: {
      Title: "Pratinjau Obrolan",
      SubTitle: "Pratinjau Obrolan dengan markdown",
    },
    Template: {
      Builtin: {
        Title: "Sembunyikan Templat Bawaan",
        SubTitle: "Sembunyikan templat bawaan dari daftar masks",
      },
    },
    Prompt: {
      Disable: {
        Title: "Nonaktifkan Otomatisasi",
        SubTitle: "Aktifkan/Matikan otomatisasi",
      },
      List: "Daftar Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} bawaan, ${custom} penggunaan khusus`,
      Edit: "Edit",
      Modal: {
        Title: "Daftar Prompt",
        Add: "Tambahkan",
        Search: "Cari Prompt",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Jumlah Pesan Riwayat",
      SubTitle: "Jumlah pesan yang akan dikirim setiap permintaan",
    },
    CompressThreshold: {
      Title: "Batas Kompresi Riwayat",
      SubTitle:
        "Jika panjang pesan melebihi batas yang ditentukan, pesan tersebut akan dikompresi",
    },

    Usage: {
      Title: "Saldo Akun",
      SubTitle(used: any, total: any) {
        return `Digunakan bulan ini: ${used}, total langganan: ${total}`;
      },
      IsChecking: "Memeriksa...",
      Check: "Periksa",
      NoAccess: "Masukkan kunci API untuk memeriksa saldo",
    },

    Model: "Model",
    Temperature: {
      Title: "Suhu",
      SubTitle: "Semakin tinggi nilainya, semakin acak keluarannya",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Tidak mengubah nilai dengan suhu",
    },
    MaxTokens: {
      Title: "Token Maksimum",
      SubTitle: "Panjang maksimum token input dan output",
    },
    PresencePenalty: {
      Title: "Penalti Kehadiran",
      SubTitle: "Semakin tinggi nilai, semakin mungkin topik baru muncul",
    },
    FrequencyPenalty: {
      Title: "Penalti Frekuensi",
      SubTitle:
        "Semakin tinggi nilai, semakin rendah kemungkinan penggunaan ulang baris yang sama",
    },
  },
  Store: {
    DefaultTopic: "Percakapan Baru",
    BotHello: "Halo! Bagaimana saya bisa membantu Anda hari ini?",
    Error: "Terjadi kesalahan, silakan coba lagi nanti.",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan singkat dari riwayat percakapan: " + content,
      Topic:
        "Buat judul berisi empat hingga lima kata untuk percakapan kita yang tidak akan disertakan dalam ringkasan percakapan, seperti instruksi, format, kutipan, tanda baca awal, tanda kutip pendahuluan, atau karakter tambahan. Silakan coba dengan kutipan berakhir.",
      Summarize:
        "Buat ringkasan percakapan dalam 200 kata yang akan digunakan sebagai promp di masa depan.",
    },
  },
  Copy: {
    Success: "Tersalin ke clipboard",
    Failed:
      "Gagal menyalin, mohon berikan izin untuk mengakses clipboard atau Clipboard API tidak didukung",
  },
  Download: {
    Success: "Konten berhasil diunduh ke direktori Anda.",
    Failed: "Unduhan gagal.",
  },
  Context: {
    Toast: (x: any) => `Dengan ${x} promp kontekstual`,
    Edit: "Pengaturan Obrolan Saat Ini",
    Add: "Tambahkan Promp",
    Clear: "Bersihkan Konteks",
    Revert: "Kembali ke Posisi Sebelumnya",
  },
  Plugin: {
    Name: "Plugin",
  },
  FineTuned: {
    Sysmessage: "Anda adalah asisten yang",
  },
  Template: {
    Item: {
      Info: (count: number) => `${count} prompt`,
      Chat: "Obrolan",
      View: "Lihat",
      Edit: "Edit",
      Delete: "Hapus",
      DeleteConfirm: "Anda yakin ingin menghapus?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Templat Prompt ${readonly ? "(hanya baca)" : ""}`,
      Download: "Unduh",
      Clone: "Duplikat",
    },
    Config: {
      Avatar: "Avatar Bot",
      Name: "Nama Bot",
      HideContext: {
        Title: "Sembunyikan Prompt Konteks",
        SubTitle: "Tidak menampilkan prompt konteks dalam obrolan",
      },
      Share: {
        Title: "Bagikan Templat Ini",
        SubTitle: "Buat tautan untuk masks ini",
        Action: "Salin Tautan",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Lewati",
    Title: "Pilih Templat",
    SubTitle: "Berkonversasilah dengan diri Anda di balik masks",
    More: "Lebih Lanjut",
    NotShow: "Jangan Tampilkan Sekarang",
    ConfirmNoShow:
      "Pastikan untuk menonaktifkannya? Anda dapat mengaktifkannya nanti melalui pengaturan.",
  },

  UI: {
    Confirm: "Konfirmasi",
    Cancel: "Batal",
    Close: "Tutup",
    Create: "Buat",
    Edit: "Edit",
  },
  Exporter: {
    Description: {
      Title: "Hanya pesan setelah menghapus konteks yang akan ditampilkan",
    },
    Model: "Model",
    Messages: "Pesan",
    Topic: "Topik",
    Time: "Tanggal & Waktu",
  },
  URLCommand: {
    Code: "Kode akses terdeteksi dari url, konfirmasi untuk mendaftar ? ",
    Settings: "Pengaturan terdeteksi dari url, konfirmasi untuk diterapkan ?",
  },
};

export default id;
