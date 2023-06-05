Erstelle eine einfache Film-Such-App, mit der Benutzer nach Filmen suchen und eine Liste der Filmtitel mit ihren Veröffentlichungsdaten anzeigen können.

## Anforderungen:
1. Erstelle eine Haupt-App-Komponente, die eine SearchBar-Komponente und eine MovieList-Komponente rendert.
2. Übergebe eine Suchanfrage von der SearchBar-Komponente an die App-Komponente, indem du eine Callback-Funktion verwendest.
3. Verwende die Suchanfrage in der App-Komponente, um Filmdaten von der OMDB API (http://www.omdbapi.com/) abzurufen und die abgerufenen Daten in einer State-Variable zu speichern.
4. Übergebe die abgerufenen Filmdaten als Prop an die MovieList-Komponente, die die Filmtitel und Veröffentlichungsdaten anzeigen wird.

## Schritte:
1. Richte eine neue React-App mit `create-react-app` ein.
2. Erstelle zwei neue Komponenten: SearchBar.js und MovieList.js.
3. In SearchBar.js erstelle ein kontrolliertes Eingabeformular, um die Suchanfrage zu verwalten.
   - Verwende useState(), um den Eingabewert zu verwalten.
   - Erstelle eine Callback-Funktion (z. B. onSearch), um die Suchanfrage an die App-Komponente zu übergeben, wenn das Formular abgeschickt wird.
4. In App.js importiere und rendere die SearchBar-Komponente.
   - Definiere eine Funktion, um die onSearch-Callback-Funktion zu behandeln und speichere die Suchanfrage in einer State-Variable mit useState().
   - Verwende den useEffect()-Hook, um Filmdaten von der OMDB-API abzurufen, wenn sich die Suchanfrage ändert.
   - Speichere die abgerufenen Filmdaten in einer State-Variable.
5. In MovieList.js erstelle eine funktionale Komponente, die Filmdaten als Prop erhält.
   - Gehe die Filmdaten durch und rendere eine Liste der Filmtitel mit ihren Veröffentlichungsdaten.
6. In App.js importiere und rendere die MovieList-Komponente und übergebe die abgerufenen Filmdaten als Prop.

Vergiss nicht, `API_KEY` durch deinen OMDB-API-Schlüssel zu ersetzen, wenn du Daten abrufst.


## Bonus-Aufgabe 1: Paginierung hinzufügen
Erweitere die Film-Such-App, indem du eine Paginierung hinzufügst, sodass Benutzer durch mehrere Seiten mit Filmergebnissen navigieren können.

1. In der App-Komponente füge einen neuen State für die aktuelle Seite hinzu.
2. Erstelle Funktionen, um die Seite vorwärts und rückwärts zu navigieren.
3. Füge der useEffect()-Hook-Abhängigkeit die aktuelle Seite hinzu, damit bei einer Seitenänderung erneut Filmdaten abgerufen werden.
4. Zeige die Seitennummer und Schaltflächen zum Blättern in der App an.

## Bonus-Aufgabe 2: Film-Details anzeigen
Erlaube Benutzern, auf einen Filmtitel zu klicken, um weitere Informationen über den Film anzuzeigen.

1. Erstelle eine neue Komponente MovieDetails.js.
2. In der MovieList-Komponente füge einen onClick-Handler für jeden Filmtitel hinzu und übergebe die Film-ID an die App-Komponente.
3. In der App-Komponente füge einen neuen State für die ausgewählte Film-ID hinzu und rendere die MovieDetails-Komponente, wenn eine Film-ID ausgewählt ist.
4. In MovieDetails.js verwende die Film-ID, um Details über den Film von der OMDB API abzurufen und zeige die Informationen wie Poster, Genre, Handlung, Schauspieler usw. an.

