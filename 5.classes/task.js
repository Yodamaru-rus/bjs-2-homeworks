class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    return this.books.find((item) => item[type] === value) || null;
  }
  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }
  setSubject(subjectName) {
    this.subject = subjectName;
  }
  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks) {
      this.marks = {};
    }
    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }
    this.marks[subjectName].push(mark);
  }
  getAverageBySubject(subjectName) {
    if (!this.marks[subjectName] || this.marks[subjectName].length === 0) {
      return 0;
    }
    return (
      this.marks[subjectName].reduce((acc, mark) => acc + mark, 0) /
      this.marks[subjectName].length
    );
  }

  getAverage() {
    const allMarks = [];
    for (let subject in this.marks) {
      allMarks.push(...this.marks[subject]);
    }
    if (allMarks.length === 0) {
      return 0;
    }
    const sum = allMarks.reduce((acc, mark) => acc + mark, 0);
    return sum / allMarks.length;
  }
  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
