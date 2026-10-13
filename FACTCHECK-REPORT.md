# Centrum — poprawki po fact-checku (13.10.2026)

## Zmieniono
- Usunięto przypisanie godzin POZ do rejestracji: w tabeli jest teraz „POZ”, a opis kontaktu nie sugeruje osobnych godzin rejestracji. Każda stopka nazywa godziny POZ i pokazuje obok uwagę o rozbieżności 8:00 / 7:30.
- Rejestrację centralną 500 308 305, pon.–pt. 8:00–16:00, ograniczono do ortopedy, neurologa, kardiologa, pulmonologa oraz lekarza medycyny pracy i transportu. Poprawiono tabelę godzin, wstęp specjalistów, opis meta i etykietę kontaktu. Pozostali mają osobne numery; nie przypisano im godzin rejestracji.
- E-recepta: dodano link do https://e-arsmedica.pl/zamow-recepte i pełne wymagania źródłowego formularza: leki przepisane na choroby przewlekłe, dane pacjenta (imię i nazwisko, PESEL, aktualny telefon, prośba o aktualny e-mail), dane leku, wybór 1–5 opakowań, wnioskowany termin odbioru, oświadczenie o nieprzebywaniu w szpitalu/sanatorium/rehabilitacji dziennej/zakładzie opiekuńczo-leczniczym oraz zgoda na przetwarzanie danych. Zachowano informację o SMS-ie i dodano realizację w dowolnej aptece. Nie utworzono formularza.
- Na stronie głównej i w kontakcie dodano źródłowy bezpłatny numer TPK 800 137 200 oraz pon.–pt. 18:00–8:00 i całodobową dostępność w weekendy, święta i inne dni ustawowo wolne. Zachowano numer opieki nocnej i świątecznej 62 765 16 54 i adres Poznańska 79. Usunięto niepoparty wskazanym źródłem dopisek „budynek Pogotowia”.
- Dodano źródłową informację o dawce przypominającej przeciw krztuścowi u dorosłych co 10 lat oraz zakupionym wyposażeniu: spirometr, EKG, Holter EKG, Holter ciśnieniowy, USG i urządzenia diagnostyki laboratoryjnej. Zachowano układ, CSS, kolory i zdjęcia.

## „do potwierdzenia”
- Dodano przy godzinach w każdej stopce: oferta POZ 8:00–18:00 kontra stopka źródłowa 7:30–18:00; osobnych godzin rejestracji nie opublikowano.
- Zachowano istniejące oznaczenia konfliktów: godziny POZ i gabinetu zabiegowego; Kasperczak — pon./czw. kontra pon./pt.; dietetyk — Julia Dobosz kontra Wiktoria Szczęsna; masaż — 880 683 065 kontra 500 308 305; kalendarz szczepień — treść 2026 kontra tytuł 2025.
- Pozostałe wcześniejsze uwagi o brakujących danych i aktualności dokumentów pozostały bez zmian.

## Weryfikacja i niewykonane
- `npm run build`: PASS, kod 0; ostrzeżenia konfiguracji bundlera i dyrektyw zależności, bez błędów kompilacji. `tsc --noEmit` oraz `git diff --check`: PASS.
- Kontrola wyrenderowanej treści SSR bez serwera: wszystkie 5 stron zwraca 200 i ma noindex/nofollow oraz uwagę przy godzinach stopki. Sprawdzono link i wymagania e-recepty, oba telefony pomocy po godzinach, pełne godziny TPK, zakres rejestracji, krztusiec i wyposażenie; brak formularzy, zewnętrznych fontów i Google Analytics w HTML.
- Niewykonane: kontrola wizualna w przeglądarce — sandbox odrzuca uruchomienie lokalnego serwera (`listen EPERM`). Nie zmieniano CSS. Nierozstrzygnięte konflikty źródłowe pozostają oznaczone; dane odpowiadają dostarczonemu audytowi, bez niezależnego potwierdzania aktualności usług.
- Nie wykonano commita ani pusha. Zastany nieśledzony `package-lock.json` pozostawiono bez edycji. Odświeżenie opublikowanego katalogu podglądu pozostaje zadaniem skryptu.
